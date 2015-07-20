rsync -c -av --delete --exclude ".idea/" --exclude ".git/" --exclude "deploy.sh" --exclude "deploy-test.sh" \
    . root@169.228.38.222:/var/www/html/
