



echo uwaga pomijam klienta c

read -p "info: " info


git add .
git commit -m "$info"
git push

s4 /l/repos/nodejs_zads put parms.sh

s4 / sh<<MMM

/l/repos/nodejs_zads/automat.sh

MMM

