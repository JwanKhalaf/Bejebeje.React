echo "Current working directory is:"
pwd
cd /var/www/html/dev.bejebeje.com/
echo "Now the current working directory is:"
pwd
echo "running docker-compose down"
docker-compose down
echo "running docker-compose up"
docker-compose pull && docker-compose up -d