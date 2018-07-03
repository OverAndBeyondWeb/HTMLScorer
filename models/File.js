module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  File.associate = models => {
    File.hasMany(models.Assessment, {
      onDelete: 'cascade'
    });
  };

  return File;
};