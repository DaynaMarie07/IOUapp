+module.exports = function(sequelize, DataTypes) {
        var Iou = sequelize.define("Iou", {
            name: DataTypes.STRING,
            complete: DataTypes.BOOLEAN,
            differential: DataTypes.DECIMAL(10, 2)
        });
    return Iou;
    } 