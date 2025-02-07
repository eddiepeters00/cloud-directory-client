export type Document = FileType | FolderType;

export type FolderType = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  createdByName: string | null;
  parentFolderId: string | null;
  nbrOfFiles: number;
  nbrOfFolders: number;
};

export type FileType = {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  createdByName: string | null;
  key: string;
  parentFolderId: string | null;
};
