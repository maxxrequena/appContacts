const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('contact', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}