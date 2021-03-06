const RESERVATION = require('../models').RESERVATION;

const reserveRoom = async (req, res) => {
    const userId = req.user.id;
    const { roomId, checkin, checkout } = req.body;
    const result = await RESERVATION.reserveRoom(userId, roomId, checkin, checkout);
    if (!result) return res.send({ status: 'FAIL', message: '예약에 실패하였습니다.' });
    res.send({ status: 'SUCCESS', message: '예약이 완료되었습니다.' });
};

const cancelRoom = async (req, res) => {
    const userId = req.user.id;
    const { roomId, checkin, checkout } = req.body;
    const result = await RESERVATION.cancelRoom(userId, roomId, checkin, checkout);
    if (!result) return res.send({ status: 'FAIL', message: '예약취소에 실패하였습니다.' });
    res.send({ status: 'SUCCESS', message: '예약취소가 완료되었습니다.' });
};

module.exports = {
    reserveRoom,
    cancelRoom
};