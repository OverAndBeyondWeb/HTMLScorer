module.exports = (sequelize, DataTypes) => {
  const Assessment = sequelize.define('Assessment', {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  });

  Assessment.associate = models => {
    Assessment.belongsTo(models.File, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Assessment;
};