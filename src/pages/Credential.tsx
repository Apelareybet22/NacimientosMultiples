import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { Baby, CreditCard, Calendar } from 'lucide-react';
import { CredentialForm } from '../types';

// Register a custom font for better typography
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#F0F9F7',
    fontFamily: 'Inter',
  },
  header: {
    backgroundColor: '#32977F',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    color: '#32977F',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#E6F3F0',
    borderRadius: 4,
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#B2D8CF',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#32977F',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 14,
    color: '#1F2937',
  },
  childrenContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 5,
  },
  childBadge: {
    backgroundColor: '#E6F3F0',
    padding: '4 8',
    borderRadius: 4,
    fontSize: 12,
  },
  credentialNumber: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#32977F',
    color: 'white',
    borderRadius: 4,
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: 60,
    color: '#E6F3F0',
    opacity: 0.2,
  },
});

const CredentialDocument = ({ data, credentialNumber }: { data: CredentialForm; credentialNumber: string }) => (
  <Document>
    <Page size="A6" style={styles.page}>
      {/* Watermark */}
      <Text style={styles.watermark}>MÚLTIPLES UY</Text>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Credencial Múltiple</Text>
        {/* You can replace this with your actual logo */}
        <Image
          style={styles.logo}
          src="https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&q=80&w=100"
        />
      </View>

      {/* Discount Label */}
      <Text style={styles.title}>DESCUENTO MÚLTIPLE</Text>

      {/* Parent Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TITULAR</Text>
        <Text style={styles.sectionContent}>
          {data.parentFirstName} {data.parentLastName}
        </Text>
        <Text style={[styles.sectionContent, { marginTop: 5 }]}>
          CI: {data.parentId}
        </Text>
      </View>

      {/* Children Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HIJOS</Text>
        <View style={styles.childrenContainer}>
          <Text style={styles.childBadge}>{data.child1Name}</Text>
          <Text style={styles.childBadge}>{data.child2Name}</Text>
          {data.child3Name && <Text style={styles.childBadge}>{data.child3Name}</Text>}
        </View>
      </View>

      {/* Birth Date */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FECHA DE NACIMIENTO</Text>
        <Text style={styles.sectionContent}>{data.dateOfBirth}</Text>
      </View>

      {/* Credential Number */}
      <Text style={styles.credentialNumber}>N° {credentialNumber}</Text>
    </Page>
  </Document>
);

const Credential = () => {
  const [formData, setFormData] = useState<CredentialForm>({
    parentFirstName: '',
    parentLastName: '',
    parentId: '',
    child1Name: '',
    child2Name: '',
    child3Name: '',
    dateOfBirth: '',
  });

  const [isFormComplete, setIsFormComplete] = useState(false);
  const credentialNumber = Math.floor(100000 + Math.random() * 900000).toString();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const requiredFields = ['parentFirstName', 'parentLastName', 'parentId', 'child1Name', 'child2Name', 'dateOfBirth'];
    const isComplete = requiredFields.every(field => formData[field as keyof CredentialForm]);
    setIsFormComplete(isComplete);
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
          Generar Credencial Múltiple
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del padre/madre
                </label>
                <input
                  type="text"
                  name="parentFirstName"
                  value={formData.parentFirstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido del padre/madre
                </label>
                <input
                  type="text"
                  name="parentLastName"
                  value={formData.parentLastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cédula de Identidad
              </label>
              <input
                type="text"
                name="parentId"
                value={formData.parentId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del primer hijo/a
                </label>
                <input
                  type="text"
                  name="child1Name"
                  value={formData.child1Name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del segundo hijo/a
                </label>
                <input
                  type="text"
                  name="child2Name"
                  value={formData.child2Name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del tercer hijo/a (opcional)
                </label>
                <input
                  type="text"
                  name="child3Name"
                  value={formData.child3Name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            {isFormComplete && (
              <div className="mt-6">
                <PDFDownloadLink
                  document={<CredentialDocument data={formData} credentialNumber={credentialNumber} />}
                  fileName={`credencial-multiple-${formData.parentLastName}.pdf`}
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  {({ loading }) =>
                    loading ? 'Generando PDF...' : 'Descargar Credencial'
                  }
                </PDFDownloadLink>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Credential;