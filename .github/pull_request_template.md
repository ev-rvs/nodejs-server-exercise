### Ticket
https://phunts.atlassian.net/browse/EDATA-

### Changes Made
- List changes and reasoning in bullet points

### Notes
*(anything the reviewer may need to know in advance before reviewing. Environment variable changes, database migrations, etc)*

### Steps to Test
1. Checkout this branch
1. Update .env file if necessary
1. Restart the docker-compose group `docker-compose down -v && docker-compose up --build -d`
1.