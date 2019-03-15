const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("./models")

bountyRouter.route("/")

    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })

    .post((req, res) => {
        if (Object.keys(req.body).length > 0) {
            const newBounty = new Bounty(req.body);
                newBounty.save(err => {
                    if (err) return res.status(500).send(err)
                    return res.status(200).send(newBounty)
                })
        } else {
            res.send("Must have values in new posted items.")
        }
    })

bountyRouter.route("/:_id")

    .get((req, res) => {
        const {_id} = req.params
        Bounty.findById(
            {_id},
            (err, bounty) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

    .put((req, res) => {
      const {_id} = req.params
      const data = req.body
      Bounty.findOneAndUpdate(
          {_id},
          data,
          {new: true},
          (err, bounty) => {
              if (err) return res.status(500).send(err)
              return res.status(200).send(bounty)
          }
      )
    })

    .delete((req, res) => {
        const {_id} = req.params
        Bounty.findOneAndDelete(
            {_id},
            (err) => {
                if (err) return res.status(500).send(err)
                res.status(200).send("Bounty successfully deleted.")
            }
        )
    })

module.exports = (bountyRouter);