export const appConfig = {
  "name": "Event Registration Platform",
  "short": "Gather",
  "description": "Manage event details, registration counts, venues, and capacity.",
  "collection": "events",
  "singular": "event",
  "fields": [
    {
      "name": "title",
      "label": "Event title",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "organizer",
      "label": "Organizer",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "date",
      "label": "Event date",
      "type": "date",
      "required": true,
      "options": []
    },
    {
      "name": "venue",
      "label": "Venue",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "capacity",
      "label": "Capacity",
      "type": "number",
      "required": true,
      "options": []
    },
    {
      "name": "registrations",
      "label": "Registrations",
      "type": "number",
      "required": true,
      "options": []
    }
  ],
  "sample": [
    {
      "title": "Web Development Workshop",
      "organizer": "CS Association",
      "date": "2026-11-12",
      "venue": "Seminar Hall",
      "capacity": 80,
      "registrations": 42
    }
  ]
};
