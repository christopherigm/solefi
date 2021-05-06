#! /bin/bash

file_name="";
show_help_message="To display help, use: ./install.sh -h";

if [ "$1" == "-h" ]
then
	cat ./install.txt
    exit 0;
fi

while getopts d:f:n:p:e: flag
do
    case "${flag}" in
        d) dns=${OPTARG};;
        f) folder=${OPTARG};;
        n) porcess_name=${OPTARG};;
        p) port=${OPTARG};;
        e) envt=${OPTARG};;
    esac
done

# ============ Functions ============
# $1 type -> nginx / supervisor
PopulateFile () {
    file_name="$port.$dns.$envt.conf";
    sudo cp $1.conf $file_name;
    sed -i "s/PORT/$port/g" $file_name;
    sed -i "s/DNS/$dns/g" $file_name;
    sed -i "s/ENVT/$envt/g" $file_name;
    sed -i "s/FOLDER/$folder/g" $file_name;
    sed -i "s/PROCESS_NAME/$porcess_name/g" $file_name;
}

if [ ! -n "$dns" ]
then
	echo "Error: DNS variable not provided: -d solefi.iguzman.com.mx";
    echo $show_help_message;
    exit 1;
fi
if [ ! -n "$folder" ]
then
	echo "Error: folder variable not provided: -f solefi";
    echo $show_help_message;
    exit 1;
fi
if [ ! -n "$porcess_name" ]
then
	echo "Error: porcess name variable not provided: -n solefi";
    echo $show_help_message;
    exit 1;
fi
if [ ! -n "$port" ]
then
	echo "Error: port variable not provided: -p 80";
    echo $show_help_message;
    exit 1;
fi
if [ ! -n "$envt" ]
then
	echo "Error: environtment variable not provided: -e staging";
    echo $show_help_message;
    exit 1;
fi

echo "Create Nginx configuration? (y/n)"
read create

if [ "$create" == "y" ]
then
	PopulateFile "nginx";
    echo "======================================";
    echo "$file_name:";
    cat $file_name;
    echo "======================================";
    echo "Deploy Nginx configuration? (y/n)"
    read deploy
    if [ "$deploy" == "y" ]
    then
        sudo cp ./$file_name /etc/nginx/sites-available/;
        sudo ln -s /etc/nginx/sites-available/$file_name /etc/nginx/sites-enabled/;
        sudo nginx -t;
        sudo service nginx restart;
    fi
    sudo rm ./$file_name;
fi

echo "Create Supervisor configuration? (y/n)"
read create
if [ "$create" == "y" ]
then
    PopulateFile "supervisor";
    echo "======================================";
    echo $file_name;
    cat $file_name;
    echo "======================================";
    echo "Deploy Supervisor configuration? (y/n)"
    read deploy
    if [ "$deploy" == "y" ]
    then
        sudo cp ./$file_name /etc/supervisor/conf.d/;
        sudo supervisorctl reread;
        sudo supervisorctl update;
        sudo supervisorctl status;
    fi
    sudo rm ./$file_name;
fi

echo "Done"
exit 0;
