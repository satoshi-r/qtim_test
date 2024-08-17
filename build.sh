#!/bin/bash
name=sgbi

echo ${name}: Creating dist folder...

base_path=/var/www/${name}
build_date=$( date +%Y%m%dT%H%M%S )
path=${base_path}/${build_date}/

mkdir ${path}
chown www-data:www-data -R ${path}
chmod 0770 -R ${path}

rsync -arv --exclude=.nuxt/ --exclude=node_modules/ --exclude=.git/ ./ ${path}
cd ${path}
npm install
npm run build
OUT=$?

if [ $OUT -eq 0 ];then
    ls -dt ${base_path}/*/ | tail -n +4 | xargs rm -rf

    dist_path=${base_path}/dist
    rm ${dist_path}
    ln -s ${path} ${dist_path}
    chown www-data:www-data -R ${dist_path}

    echo Done ${name}.
else
    echo Build failed!
fi
