import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IEventList } from '@/types/calendar';

interface CalendarState {
  events: IEventList[];
  selectedEvents: IEventList[];
  editingEvent: IEventList | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  events: [],
  selectedEvents: [],
  editingEvent: null,
  isLoading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEventList[]>) => {
      state.events = action.payload;
    },
    addEvent: (state, action: PayloadAction<IEventList>) => {
      state.events.push(action.payload);
      state.selectedEvents.push(action.payload);
    },
    updateEvent: (
      state,
      action: PayloadAction<{
        eventId: string;
        updatedSchedule: Partial<IEventList>;
      }>,
    ) => {
      const { eventId, updatedSchedule } = action.payload;
      state.events = state.events.map(event =>
        event.eventId === eventId ? { ...event, ...updatedSchedule } : event,
      );
      state.selectedEvents = state.selectedEvents.map(event =>
        event.eventId === eventId ? { ...event, ...updatedSchedule } : event,
      );
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      const eventId = action.payload;
      state.events = state.events.filter(event => event.eventId !== eventId);
      state.selectedEvents = state.selectedEvents.filter(
        event => event.eventId !== eventId,
      );
    },
    setSelectedEvents: (state, action: PayloadAction<IEventList[]>) => {
      state.selectedEvents = action.payload;
    },
    setEditingEvent: (state, action: PayloadAction<IEventList | null>) => {
      state.editingEvent = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice.reducer;
