# Reimbursement-Application

This is a POC (proof-of-concept) web application that manages a company's reimbursement process. An employee can login and request for reimbursement for an expenditure incurred on behalf of the company. The reimbursement ticket will be then created and be sent to the manager. After the approval, depending on the amount of the reimbursement, the ticket will be cascasded to the upper management as needed. Otherwise, the ticket will be fulfilled and the reimbursement will be granted to the employee, who will be notified in their portal. 

## List of Technologies
- Node.js
- Express.js
- React
- Typescript
- AWS SDK - DynamoDB


# License

MIT License

Copyright (c) 2022 Daniel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.