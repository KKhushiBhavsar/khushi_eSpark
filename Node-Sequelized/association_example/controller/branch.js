const Branch = require("../models").Branch;
const Company = require("../models").Company;

const list = async (req, res) => {
  try {
    const response = await Branch.findAll({
      include: [
        {
          model: Company,
        },
      ],
    });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getById = async (req, res) => {
  try {
    const response = await Branch.findByPk(req.params.id, {
      include: [
        {
          model: Company,
          as: "company",
        },
      ],
    });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const add = async (req, res) => {
  try {
    const response = Branch.create({
      company_id: req.body.company_id,
      branch_name: req.body.branch_name,
      branch_address: req.body.branch_address,
      branch_city: req.body.branch_city,
    });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const update = (req, res) => {
  return Branch.findByPk(req.params.id, {
    include: [
      {
        model: Company,
        as: "company",
      },
    ],
  })
    .then((branch) => {
      if (!branch) {
        return res.status(404).send({
          message: "Branch Not Found",
        });
      }
      return branch
        .update({
          branch_name: req.body.branch_name || company.branch_name,
          branch_address: req.body.branch_address || company.branch_address,
          branch_city: req.body.branch_city || company.branch_city,
        })
        .then(() => res.status(200).send(branch))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

const deleteBranch = (req, res) => {
  return Branch.findByPk(req.params.id)
    .then((branch) => {
      if (!branch) {
        return res.status(400).send({
          message: "Branch Not Found",
        });
      }
      return branch
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};

module.exports = { list, getById, add, update, deleteBranch };
