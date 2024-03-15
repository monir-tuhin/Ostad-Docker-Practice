pwd : To show your current directory
cd : To go home directory
cd . . : To go one step previous folder (cd with two dot)
cd . : Stay in current folder (cd with one dot)
ls : To show all files and folders
ls -a : To show all files and folders with hidden files and folders also
ls -l : To show all files and folders with details info
Run an app at a fresh ubuntu server by docker manually (without docker file build)
docker run  - -rm -it ubuntu:20.04 : Here (04 is the 4 number month)
-rm : after stopped the container it will removed automatically
-it : Interactive. After running the container we can interact with the container. Container run howar sathe sathe ami container er sathe interact korte chai. Mane ami container er moddhe dhuke command chalabo. Ami je shell er moddhe docker container ta run korchi oi shell theke i ami sorasorai interact korte parbo
ubuntu:20.04 : Image name
If image not found in locally then it will pull from the docker hub
uname -a: writes to standard output the name of the operating system that you are using. After the container runs we are able to write commands in the shell.


sudo: To run the command as privilege of root user 
apt is the package manager of ubuntu
apt-get update : To update installed package in up to date by terminal linux
apt-get install apache2 : To install apache2 by terminal linux
service apache2 start: kono service background a chalate chaile
top: Linux machine a kon kon service colteche ei tar list dekhar jonno top
apt-get install apache2 php libapache2-mod-php -y (eksathe multiple package install)
cat apache2.conf : To read file data
touch index.php : to create a file
nano index.php: to create a file with input mode
rm <fileName> : To delete specific file
rm -r <folderName>: To delete a folder. Here r means recursive. First delete all files of that specific folder then delete folder
COPY ./index.php  /var/www/html/
docker cp ~/index.php  35f33333:/var/www/html/: here 
cp: copy
~: Home directory
/index.php : index.php file which located at home directory
(35f33333 : /var/www/html/) : 35f33333 is container id. And /var/www/html/ is apache kon address a index.php file ta rakhbo sei ta define koreche
Run an app at a fresh ubuntu server by docker file. Create a docker file (Uporer instruction gulo docker file a inject kora and docker file er maddhome image build kora and then container calano)
Create a docker file (file exist at this directory: /home/monir/Development/Personal/RND/Docker/Ostad-Docker-Practice/Class-4/docker-with-php)
docker build -t monirzaman/php-apache-img:latest .
build: To build the image
-t : To give a tag in the image (here the latest is the image tag. You can give any tag)
monirzaman/php-apache-img : Image name
. : dot means current directory. In which docker file exist
docker run  - -rm -it -p 9090:80 monirzaman/php-apache-img
service apache2 start: kono service background a chalate chaile
ARG DEBIAN_FRONTEND=noninteractive : If you want to pass build time environment variable then use ARG before the command
