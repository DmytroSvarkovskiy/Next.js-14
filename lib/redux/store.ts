import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AdvicePeTReduser } from '@/features';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { storage } from './customStorage';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['email'],
};

const rootReducer = combineReducers({
  advisePetState: persistReducer(persistConfig, AdvicePeTReduser),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
