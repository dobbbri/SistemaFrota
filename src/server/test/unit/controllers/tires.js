import TiresController from '../../../controllers/tires';

describe('# TEST UNIT CONTROLLER # Controllers: tires', () => {

  describe('GET all tires listAll()', () => {
    it('should return a list of tires', () => {
      const Tires = {
        findAll: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        cod:10,
        marca:'PIRELLI',
        vida:1,
        sulco:1,
        recap:false,
        trash:false,
        vehicle_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Tires.findAll({})).thenResolve(expetectedResponse);

      const tiresController = new TiresController(Tires);
      return tiresController.listAll()
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('GET a driver getById()', () => {
    it('should return a driver',() => {
      const Tires = {
        findOne: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        cod:10,
        marca:'PIRELLI',
        vida:1,
        sulco:1,
        recap:false,
        trash:false,
        vehicle_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Tires.findOne({ where: {id: 1}})).thenResolve(expetectedResponse);

      const tiresController = new TiresController(Tires);
      return tiresController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('CREATE a driver create()', () => {
    it('should create a driver', () => {
      const Tires = {
        create: td.function(),
      };

      const requestBody = {
        cod:11,
        marca:'NEW PIRELLI',
        vida:2,
        sulco:11,
        recap:false,
        trash:false,
        vehicle_id:1
      };

      const expetectedResponse = [{
        cod:11,
        marca:'NEW PIRELLI',
        vida:2,
        sulco:11,
        recap:false,
        trash:false,
        vehicle_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Tires.create(requestBody)).thenResolve(expetectedResponse);

      const tiresController = new TiresController(Tires);
      return tiresController.create(requestBody)
        .then(response => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expetectedResponse);
        })
    });
  });

  describe('UPDATE a driver update()', () => {
    it('should update a driver', () => {
      const Tires = {
        update: td.function(),
      }

      const requestBody = {
        id:1,
        cod:11,
        marca:'UPDATED PIRELLI',
        vida:2,
        sulco:11,
        recap:false,
        trash:false,
        vehicle_id:1
      };

      const expetectedResponse = [{
        id:1,
        cod:11,
        marca:'UPDATED PIRELLI',
        vida:2,
        sulco:11,
        recap:false,
        trash:false,
        vehicle_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Tires.update(requestBody, { where: { id: 1}})).thenResolve(expetectedResponse);

      const tiresController = new TiresController(Tires);
      return tiresController.update(requestBody, { id: 1})
        .then(response => {
          expect(response.data).to.be.eql(expetectedResponse);
        })
    });
  });

  describe('REMOVE a driver delete()', () => {
    it('should remove a driver', () => {
      const Tires = {
        destroy: td.function(),
      };

      const expetectedResponse = {};

      td.when(Tires.destroy({ where: { id: 1 }})).thenResolve();

      const tiresController = new TiresController(Tires);
      return tiresController.remove({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));

    });
  });

});
