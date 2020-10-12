# Login Docker Reg
```bash
cat pat | docker login docker.pkg.github.com --username tallengft --password-stdin
```

# Download Docker Image
```bash
docker pull docker.pkg.github.com/tallengft/consul-connect-testing/server:master
```