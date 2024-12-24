import { IQuote } from "../interface";

export const quotes: IQuote[] = [
  {
    "status": "awaiting",
    "title": "Request for Medical Equipment",
    "refno": "RQ #01234",
    "requestor": {
      "name": "Jane Doe",
      "role": "Head nurse",
      "department": "Paediatrics"
    },
    "department": "Maternity",
    "client": {
      "name": "Westend Hospital",
      "address": "Clear Street"
    },
    "expectedDelivery": "12-02-2024",
    "dateCreated": "06-12-2024 08:00:00",
    "items": [
      {
        "name": "Oxygen concentrator",
        "itemNo": "#28373",
        "variant": "blue",
        "qty": 100,
        "unit": "pieces",
        "price": 200,
        "expectedDeliveryDate": "08-07-2024"
      },
      {
        "name": "Mechanical ventilator",
        "itemNo": "#28374",
        "variant": "nil",
        "qty": 45,
        "unit": "kg",
        "price": 350,
        "expectedDeliveryDate": "08-07-2024"
      },
      {
        "name": "Patient Monitor",
        "itemNo": "#28375",
        "variant": "blue",
        "qty": 30,
        "unit": "units",
        "price": 300,
        "expectedDeliveryDate": "08-07-2024"
      },
      {
        "name": "Mechanical ventilator",
        "itemNo": "#28376",
        "variant": "blue",
        "qty": 35,
        "unit": "units",
        "price": 200,
        "expectedDeliveryDate": "08-07-2024"
      }
    ],
    "notes": "",
    "paymentType": "Net 30",
    "shippingMethod": "Courier Services",
    "leadTime": 10,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  },
  {
    "status": "approved",
    "title": "Request for ICU Equipment",
    "refno": "RQ #01235",
    "requestor": {
      "name": "Mark Smith",
      "role": "ICU Manager",
      "department": "ICU"
    },
    "department": "Critical Care",
    "client": {
      "name": "City Hospital",
      "address": "Main Street"
    },
    "expectedDelivery": "15-02-2024",
    "dateCreated": "08-12-2024 10:00:00",
    "items": [
      {
        "name": "Cardiac Monitor",
        "itemNo": "#28377",
        "variant": "black",
        "qty": 15,
        "unit": "units",
        "price": 450,
        "expectedDeliveryDate": "15-07-2024"
      },
      {
        "name": "Defibrillator",
        "itemNo": "#28378",
        "variant": "red",
        "qty": 10,
        "unit": "units",
        "price": 1200,
        "expectedDeliveryDate": "15-07-2024"
      }
    ],
    "notes": "Urgent request for ICU",
    "paymentType": "Net 45",
    "shippingMethod": "Air Freight",
    "leadTime": 15,
    "deliverySchedule": "Standard Delivery",
    "attachements": []
  },
  {
    "status": "rejected",
    "title": "Request for Surgical Tools",
    "refno": "RQ #01236",
    "requestor": {
      "name": "Sarah Miller",
      "role": "Surgical Nurse",
      "department": "Surgery"
    },
    "department": "Surgical",
    "client": {
      "name": "Greenfield Hospital",
      "address": "Park Avenue"
    },
    "expectedDelivery": "20-02-2024",
    "dateCreated": "09-12-2024 09:30:00",
    "items": [
      {
        "name": "Surgical Forceps",
        "itemNo": "#28379",
        "variant": "steel",
        "qty": 50,
        "unit": "sets",
        "price": 80,
        "expectedDeliveryDate": "12-07-2024"
      },
      {
        "name": "Scalpel",
        "itemNo": "#28380",
        "variant": "stainless steel",
        "qty": 120,
        "unit": "pieces",
        "price": 20,
        "expectedDeliveryDate": "12-07-2024"
      }
    ],
    "notes": "Request rejected due to budget constraints",
    "paymentType": "Net 30",
    "shippingMethod": "Courier Services",
    "leadTime": 8,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  },
  {
    "status": "awaiting",
    "title": "Request for Diagnostic Equipment",
    "refno": "RQ #01237",
    "requestor": {
      "name": "Emily Green",
      "role": "Lab Technician",
      "department": "Pathology"
    },
    "department": "Diagnostics",
    "client": {
      "name": "Horizon Medical Center",
      "address": "Broadway Street"
    },
    "expectedDelivery": "25-02-2024",
    "dateCreated": "10-12-2024 11:00:00",
    "items": [
      {
        "name": "Blood Gas Analyzer",
        "itemNo": "#28381",
        "variant": "white",
        "qty": 10,
        "unit": "units",
        "price": 1000,
        "expectedDeliveryDate": "20-07-2024"
      },
      {
        "name": "MRI Scanner",
        "itemNo": "#28382",
        "variant": "digital",
        "qty": 2,
        "unit": "pieces",
        "price": 30000,
        "expectedDeliveryDate": "20-07-2024"
      }
    ],
    "notes": "Urgent equipment request",
    "paymentType": "Net 30",
    "shippingMethod": "Air Freight",
    "leadTime": 12,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  },
  {
    "status": "approved",
    "title": "Request for OT Equipment",
    "refno": "RQ #01238",
    "requestor": {
      "name": "John White",
      "role": "Surgical Specialist",
      "department": "Surgery"
    },
    "department": "Orthopedics",
    "client": {
      "name": "Sunnybrook Medical",
      "address": "River Road"
    },
    "expectedDelivery": "18-02-2024",
    "dateCreated": "11-12-2024 08:00:00",
    "items": [
      {
        "name": "Orthopedic Drill",
        "itemNo": "#28383",
        "variant": "blue",
        "qty": 15,
        "unit": "sets",
        "price": 700,
        "expectedDeliveryDate": "10-07-2024"
      },
      {
        "name": "Surgical Table",
        "itemNo": "#28384",
        "variant": "adjustable",
        "qty": 5,
        "unit": "units",
        "price": 1500,
        "expectedDeliveryDate": "10-07-2024"
      }
    ],
    "notes": "Approved for immediate use in OT",
    "paymentType": "Net 30",
    "shippingMethod": "Courier Services",
    "leadTime": 10,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  },
  {
    "status": "rejected",
    "title": "Request for Hospital Furniture",
    "refno": "RQ #01239",
    "requestor": {
      "name": "Nina Patel",
      "role": "Procurement Officer",
      "department": "Operations"
    },
    "department": "Procurement",
    "client": {
      "name": "MediCare Hospital",
      "address": "Kings Avenue"
    },
    "expectedDelivery": "27-02-2024",
    "dateCreated": "12-12-2024 14:00:00",
    "items": [
      {
        "name": "Hospital Bed",
        "itemNo": "#28385",
        "variant": "electric",
        "qty": 25,
        "unit": "pieces",
        "price": 2000,
        "expectedDeliveryDate": "22-07-2024"
      },
      {
        "name": "IV Stand",
        "itemNo": "#28386",
        "variant": "metal",
        "qty": 50,
        "unit": "units",
        "price": 100,
        "expectedDeliveryDate": "22-07-2024"
      }
    ],
    "notes": "Request rejected due to excessive quantity",
    "paymentType": "Net 30",
    "shippingMethod": "Courier Services",
    "leadTime": 7,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  },
  {
    "status": "approved",
    "title": "Request for Emergency Supplies",
    "refno": "RQ #01240",
    "requestor": {
      "name": "Chris Evans",
      "role": "Emergency Coordinator",
      "department": "Emergency"
    },
    "department": "Emergency",
    "client": {
      "name": "Global Health Center",
      "address": "Parkland Road"
    },
    "expectedDelivery": "10-03-2024",
    "dateCreated": "13-12-2024 16:00:00",
    "items": [
      {
        "name": "First Aid Kit",
        "itemNo": "#28387",
        "variant": "basic",
        "qty": 100,
        "unit": "kits",
        "price": 50,
        "expectedDeliveryDate": "05-07-2024"
      },
      {
        "name": "Trauma Shears",
        "itemNo": "#28388",
        "variant": "stainless steel",
        "qty": 200,
        "unit": "pieces",
        "price": 15,
        "expectedDeliveryDate": "05-07-2024"
      }
    ],
    "notes": "Approved for urgent emergency use",
    "paymentType": "Net 30",
    "shippingMethod": "Courier Services",
    "leadTime": 9,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  },
  {
    "status": "awaiting",
    "title": "Request for Respiratory Equipment",
    "refno": "RQ #01241",
    "requestor": {
      "name": "Patricia Allen",
      "role": "Respiratory Therapist",
      "department": "Respiratory"
    },
    "department": "Respiratory Care",
    "client": {
      "name": "CareFirst Medical",
      "address": "Sunset Blvd"
    },
    "expectedDelivery": "05-03-2024",
    "dateCreated": "14-12-2024 18:00:00",
    "items": [
      {
        "name": "Nebulizer",
        "itemNo": "#28389",
        "variant": "compact",
        "qty": 30,
        "unit": "units",
        "price": 150,
        "expectedDeliveryDate": "25-07-2024"
      },
      {
        "name": "Ventilator",
        "itemNo": "#28390",
        "variant": "portable",
        "qty": 20,
        "unit": "units",
        "price": 5000,
        "expectedDeliveryDate": "25-07-2024"
      }
    ],
    "notes": "",
    "paymentType": "Net 30",
    "shippingMethod": "Courier Services",
    "leadTime": 8,
    "deliverySchedule": "Immediate Delivery",
    "attachements": []
  }
]  