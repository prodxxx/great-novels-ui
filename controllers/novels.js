import models from '../models'

export const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll({ include: [{ model: models.Authors }, { model: models.Genres }] })

  return response.send(novels)
}

export const getNovelsByTitle = async (request, response) => {
  const { identifier } = request.params

  const novels = await models.Novels.findAll({
    where: {
      title: { [models.Sequelize.Op.like]: `%${identifier}%` },
    },
  })

  return novels
    ? response.send(novels)
    : response.sendStatus(404)
}
