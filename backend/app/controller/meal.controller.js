const mealModel = require("../../database/models/meals.model")
const Helper = require("../helper")
// ==================================
class Meal{
        static add = async(req,res)=>{
        try{
            const mealData = new mealModel(req.body)
            await mealData.save()
            Helper.resHandler(res, 200, true, mealData, "meal added successfull")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error Adding data")
        }
        }
        static all = async(req,res)=>{
        try{
            const mealData = await mealModel.find()
                Helper.resHandler(res, 200, true, mealData, "meal featched")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error featch data")
            }
        }
        static single = async(req,res)=>{
            try{
                const mealData = await mealModel.findById(req.params.id)
                Helper.resHandler(res, 200, true, mealData, "meal featched")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error featch data")
            }
        }
        static delAll = async(req,res)=>{
            try{
                await mealModel.deleteMany()
                Helper.resHandler(res, 200, true, {}, "meals deleted")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error featch data")
            }
        }
        static delSingle = async(req,res)=>{
            try{
                const mealData = await mealModel.findByIdAndDelete(req.params.id)
                Helper.resHandler(res, 200, true, mealData, "meals featched")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error featch data")
            }
        }
        static editSingle = async(req,res)=>{
            try{
                const mealData = await mealModel.findById(req.params.id)
                for(let key in req.body){
                    mealData[key]= req.body[key]
                }
                await mealData.save()
                Helper.resHandler(res, 200, true, mealData, "meals featched")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error featch data")
            }
        }
}
// ==================================
module.exports=Meal