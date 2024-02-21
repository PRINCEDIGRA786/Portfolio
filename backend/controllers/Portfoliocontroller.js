const Portfolio = require("../models/Portfolio")

// Set up Multer for file uploads

const createportfolio = async (req, res) => {
    try {
        const folio = new Portfolio({
            name: req.body.name,
            email: req.body.email,
            pic: req.body.pic,
            education: req.body.education,
            hobbies: req.body.hobbies,
            about: req.body.about,
            profession: req.body.profession,
            experience: req.body.experience,
            user: req.user.id
        })
        const savedfolio = await folio.save()

        res.json(savedfolio)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

}
const dashboard = async (req, res) => {
    try {
        const list = await Portfolio.findOne({ user: req.user.id })
        res.json(list)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
const fetchall = async (req, res) => {
    try {
        const list = await Portfolio.find({ user: { $ne: req.user.id } })
        // const list1 = [];
        // await list.forEach((element) => {
        //     if (element.user !== req.user.id) {
        //         list1.push(element)

        //     }

        // })
        res.json(list)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


const rating = async (req, res) => {
    try {

        const { rate } = req.body

        let portfolio = await Portfolio.findById(req.params.id);
        // console.log("order is: ", order)
        if (!portfolio) {
            return res.status(404).send("not found bro")
        }
        // console.log("portfolio.stars: ", portfolio.stars)
        var dividend = await portfolio.stars * portfolio.ratenum + rate;
        // console.log("dividend: ", dividend)
        var divisor = await portfolio.ratenum + 1;
        // console.log("divisor: ", divisor)
        // order = await Order.findOne({ title: title });
        await portfolio.updateOne({
            $set: {
                stars: Math.floor(dividend / divisor),
                ratenum: portfolio.ratenum + 1
            }
        })
        res.send("Successfully Updated")
    }
    catch (error) {
        res.status(400).send("Some error occured")
    }
}

const adddocuments = async (req, res) => {

    try {

        const { documents } = req.body
        const portfolio = await Portfolio.findOne({ user: req.user.id })
        if (!portfolio) {
            return res.status(404).send("Not found bro")
        }


        if (portfolio.documents.length == 0) {
            await portfolio.updateOne({
                $set: {
                    documents: documents
                }
            })
            res.status(200).json({ "success": true })
        }
        else {
            portfolio.documents.map((element) => {
                documents.push(element);
            }
            )
            await portfolio.updateOne({
                $set: {
                    documents: documents
                }
            })
            res.status(200).json({ "success": true })


        }



    }
    catch (error) {
        res.status(400).json({ "success": false })
        // console.log(error)
    }
}
module.exports = { createportfolio, adddocuments, dashboard, fetchall, rating }