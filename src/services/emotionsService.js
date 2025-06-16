import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const emotionsService = {
  async saveEmotion(emotionId, telegramId) {
    try {
      const docRef = await addDoc(collection(db, 'emotions'), {
        emotionId,
        timestamp: new Date(),
        telegramId: telegramId
      });
      return docRef.id;
    } catch (error) {
      console.error('Error saving emotion:', error);
      throw error;
    }
  },

  async getEmotions(telegramId, startDate, endDate) {
    try {
      const q = query(
        collection(db, 'emotions'),
        where('telegramId', '==', telegramId),
        where('timestamp', '>=', startDate),
        where('timestamp', '<=', endDate)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting emotions:', error);
      throw error;
    }
  }
};
