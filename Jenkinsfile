pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh "npm install"
            }
        }
        stage('Run Unit Tests with coverage') {
            steps {
                sh "npm test"
            }
        }
        stage('Build application') {
            steps {
            	sh "npm run serve &"
            }
            post {
              always {
                publishHTML target: [
                  allowMissing         : false,
                  alwaysLinkToLastBuild: false,
                  keepAll             : true,
                  reportDir            : '.coverage/lcov-report',
                  reportFiles          : 'index.html',
                  reportName           : 'Test Report'
                ]
              }
            }
        }
        stage('Run Functional Tests') {
            steps {
              sauce('SAUCE_ACCESS_KEY_EU') {
                sauceconnect(options: '', sauceConnectPath: '', useGeneratedTunnelIdentifier: true, useLatestSauceConnect: true) {
                  wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    sh "npm run test.e2e.sauce.chrome ${env.CLI_ARGS}"
                  }
                  step([$class: 'SauceOnDemandTestPublisher'])
                }
              }
            }
        }
    }
}
