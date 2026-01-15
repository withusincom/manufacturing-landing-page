interface CompanyInfo {
  name: string
  representative: string
  email: string
  address: string
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'FabMind',
  representative: '서재원',
  email: 'jwseo@withusin.com',
  address: '울산 남구 테크노산업로 55번길 10 AI 혁신파크 209호',
}

interface Copyright {
  text: string
}

export const COPYRIGHT: Copyright = {
  text: 'FabMind All Rights Reserved 2026',
}
