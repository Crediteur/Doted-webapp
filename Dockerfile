FROM node:lts

RUN useradd -M doted

ADD --chown=doted:doted build/ app/

# The port that your application listens to.
EXPOSE 8080

WORKDIR /app

# Prefer not to run as root.
USER doted

CMD ["./index.js"]
