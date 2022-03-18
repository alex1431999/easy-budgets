import { Request } from 'express';
import app from '../app';
import { IBudgetSheet } from '../types/Budget';
import { setBudgetSheets, getBudgetSheets } from '../database/queries/budgetSheets';

app.post('/budgetSheets', (req: Request<{}, {}, { budgetSheets: IBudgetSheet[] }>, res) => {
  const { budgetSheets } = req.body;
  const { userId } = req.session;

  setBudgetSheets(userId, budgetSheets)
    .then(() => res.sendStatus(200))
    .catch((error) => res.status(500).json(error));
});

app.get('/budgetSheets', (req, res) => {
  const { userId } = req.session;

  getBudgetSheets(userId)
    .then((budgetSheets: IBudgetSheet[]) => res.status(200).json(budgetSheets))
    .catch((error) => res.status(500).json(error));
});
