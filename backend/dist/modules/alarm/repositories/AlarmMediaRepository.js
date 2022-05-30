"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlarmMediaRepository = void 0;

var _dataSource = require("../../../../data-source");

var _AlarmMedia = require("../entities/AlarmMedia");

class AlarmMediaRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_AlarmMedia.AlarmMedia);
  }

  async create(alarmMedia) {
    const {
      references_ids,
      ...saveData
    } = alarmMedia;
    const alarmMediaEntity = this.repository.create(saveData);
    alarmMediaEntity.setReferencesIds(references_ids);
    return this.repository.save(alarmMediaEntity);
  }

}

exports.AlarmMediaRepository = AlarmMediaRepository;