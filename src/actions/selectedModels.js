export const SELECT_MODEL = 'SELECT_MODEL'

export function selectedModels(model, modelName) {
  return {
    type: SELECT_MODEL,
    payload: {
      name: modelName,
      manufacturer: model.manufacturer,
      year: model.year,
      origin: model.origin
    }
  }
}