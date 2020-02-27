const express = require("express");
const router = express.Router();

const {
    create,
    propertyById,
    read,
    remove,
    update,
    list,
    listRelated,
    listStatuses,
    listBySearch,
    photo,
    listSearch
} = require("../../controllers/property");
const {
    requireSignin,
    isAuth,
    isAdmin
} = require("../../controllers/auth");
const {
    userById
} = require("../../controllers/user");


router.get("/", list);
router.delete("/:propertyId/:userId", requireSignin, isAuth, isAdmin, remove);
router.get("/search", listSearch);
router.post("/by/search", listBySearch);
router.get("/statuses", listStatuses);
router.get("/:propertyId", read);
router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/update/:propertyId/:userId", requireSignin, isAuth, isAdmin, update);
router.get("/related/:propertyId", listRelated);
router.get("/photo/:propertyId", photo);



router.param("userId", userById);
router.param("propertyId", propertyById);

module.exports = router;