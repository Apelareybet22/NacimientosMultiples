export interface Business {
  id: string;
  name: string;
  description: string;
  imageUrl:string;
  instagramUrl: string;
}

export interface CredentialForm {
  parentFirstName: string;
  parentLastName: string;
  parentId: string;
  child1Name: string;
  child2Name: string;
  child3Name?: string;
  dateOfBirth: string;
}