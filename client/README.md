## Expense Report Project

*Stack*

React + Redux, GraphQL, Node + Express

**Accountant Workflow**

*Setup*

1. Upload AmEx bill (manual).
2. Match charges with any receipts that have already been uploaded (automatic).
3. Send any unreconciled charges out to cardholders (automatic). This also triggers a reminder to be sent for any unreconciled charges.

_Optional: send additional reminders._

*For records/audits*

4. Print off reconciled charges and receipts (manual). Note: there will be warning if certain charges have not been reconciled, just to make sure it's not a mistake. If a cardholder has indicated that they turned in a physical copy of the receipt, that won't trigger a warning, but it will be noted in the reconciliation document.

*For Workmajig*

5. Assign GLs to each charge (manual).
6. Export spreadsheet of all charges, organized by client (automatic).
