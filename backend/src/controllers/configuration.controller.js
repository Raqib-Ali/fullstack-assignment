import Configuration from "../models/configuration.model.js";

export const getConfiguration = async (req, res, next) => {
    try {
        const { id } = req.params;

        const config = await Configuration.findOne({ configId: id });
        if (!config) return res.status(404).json({ message: "Configuration not found" });
        res.json(config);
    } catch (err) {
        next(err);
    }
};

export const updateRemark = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { remark } = req.body;

        const config = await Configuration.findOneAndUpdate(
            { configId: id },
            { remark },
            { new: true }
        );

        if (!config) return res.status(404).json({ message: "Configuration not found" });
        res.json({ message: "success" });
    } catch (err) {
        next(err);
    }
};
