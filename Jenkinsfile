pipeline {

    agent any
    
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build'
            }
        }
        stage('Delivery') {

        }
        
    }
}