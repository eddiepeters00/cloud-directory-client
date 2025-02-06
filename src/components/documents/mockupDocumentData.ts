import type { Document } from "./type";

export const mockDocuments: Document[] = [
  {
    id: 123,
    name: "File One",
    createdByName: "Alice",
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-02-01T12:00:00Z",
    mimeType: "application/pdf",
    size: 1048576,
    nbrOfFiles: 1,
    nbrOfFolders: 0,
  },
  {
    id: 321,
    name: "Folder one",
    createdByName: "Bob",
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-02-02T14:00:00Z",
    mimeType: "",
    size: 2097152,
    nbrOfFiles: 2,
    nbrOfFolders: 1,
  },
  {
    id: 421,
    name: "Document Three",
    createdByName: "Charlie",
    createdAt: "2024-01-20T11:15:00Z",
    updatedAt: "2024-02-03T16:45:00Z",
    mimeType: "image/png",
    size: 524288,
    nbrOfFiles: 1,
    nbrOfFolders: 0,
  },
];
