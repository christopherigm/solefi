pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Check') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            environment {
                PUBLIC_URL = ''
            }
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/apps/staging/solefi'
                sh 'cp -r build /var/www/apps/staging/'
                sh 'mv /var/www/apps/staging/build /var/www/apps/staging/solefi'
                sh 'cp -r deploy /var/www/apps/staging/solefi'
            }
        }
        stage('App') {
            steps {
                sh 'rm -rf app'
                sh 'cordova create app'
                sh 'cp -r build app/'
                sh 'rm -rf app/www'
                sh 'mv app/build app/www'
                sh './android/prepare-index.sh'
                sh 'rm app/config.xml'
                sh 'cp android/config.xml app/'
                sh 'cp android/logo.png app/'
                dir('app') {
                    sh 'cordova platform add android'
                }
                dir('app') {
                    sh 'cordova build android'
                }
                sh 'cp app/platforms/android/app/build/outputs/apk/debug/app-debug.apk /var/www/apps/staging/solefi/static/app.apk'
                sh 'chmod 777 /var/www/apps/staging/solefi/static/app.apk'
            }
        }
    }
}