#!/bin/bash
help(){
    echo "create-module.bash -v v1 -n profile"
}

while getopts ":v:n:" opt; do
    case $opt in
        v) version="$OPTARG";;
        n) name="$OPTARG";;
        \?) help
        exit 1;;
    esac
    
    case $OPTARG in
        -*) echo "Option $opt needs a valid argument"
            exit 1
        ;;
    esac
done

if test "$version" == "" || test "$name" == "";
then
help;
exit 1;
fi

mkdir -p ./src/api/$version/$name;
touch ./src/api/$version/$name/index.ts;
arr=("controllers" "validations" "middlewares" "services" "interfaces" "models" "routes");

for str in ${arr[@]}; do
  mkdir ./src/api/$version/$name/$str;
  touch ./src/api/$version/$name/$str/index.ts;
done