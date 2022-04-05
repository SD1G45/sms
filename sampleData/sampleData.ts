function couponData() {
  return [
    {
      date: "12:00 AM",
      "coupons": 0
    },
    {
      date: "1:00 AM",
      "coupons": 0
    },
    {
      date: "2:00 AM",
      "coupons": 0
    },
    {
      date: "3:00 AM",
      "coupons": 0
    },
    {
      date: "4:00 AM",
      "coupons": 0
    },
    {
      date: "5:00 AM",
      "coupons": 0
    },
    {
      date: "6:00 AM",
      "coupons": 0
    },
    {
      date: "7:00 AM",
      "coupons": 0
    },
    {
      date: "8:00 AM",
      "coupons": 0
    },
    {
      date: "9:00 AM",
      "coupons": 0
    },
    {
      date: "10:00 AM",
      "coupons": 0
    },
    {
      date: "11:00 AM",
      "coupons": 3
    },
    {
      date: "12:00 PM",
      "coupons": 7
    },
    {
      date: "1:00 PM",
      "coupons": 10
    },
    {
      date: "2:00 PM",
      "coupons": 18
    },
    {
      date: "3:00 PM",
      "coupons": 20
    },
    {
      date: "4:00 PM",
      "coupons": 20
    },
    {
      date: "5:00 PM",
      "coupons": 20
    },
    {
      date: "6:00 PM",
      "coupons": 22
    },
    {
      date: "7:00 PM",
      "coupons": 23
    },
    {
      date: "8:00 PM",
      "coupons": 25
    },
    {
      date: "9:00 PM",
      "coupons": 25
    },
    {
      date: "10:00 PM",
      "coupons": 25
    },
    {
      date: "11:00 PM",
      "coupons": 25
    },
    {
      date: "11:59 PM",
      "coupons": 25
    },
  ];
}

function customersData() {
  return [
    {
      date: "12:00 AM",
      "customers": 0
    },
    {
      date: "1:00 AM",
      "customers": 0
    },
    {
      date: "2:00 AM",
      "customers": 0
    },
    {
      date: "3:00 AM",
      "customers": 0
    },
    {
      date: "4:00 AM",
      "customers": 0
    },
    {
      date: "5:00 AM",
      "customers": 0
    },
    {
      date: "6:00 AM",
      "customers": 0
    },
    {
      date: "7:00 AM",
      "customers": 0
    },
    {
      date: "8:00 AM",
      "customers": 0
    },
    {
      date: "9:00 AM",
      "customers": 0
    },
    {
      date: "10:00 AM",
      "customers": 0
    },
    {
      date: "11:00 AM",
      "customers": 3
    },
    {
      date: "12:00 PM",
      "customers": 7
    },
    {
      date: "1:00 PM",
      "customers": 10
    },
    {
      date: "2:00 PM",
      "customers": 18
    },
    {
      date: "3:00 PM",
      "customers": 20
    },
    {
      date: "4:00 PM",
      "customers": 20
    },
    {
      date: "5:00 PM",
      "customers": 20
    },
    {
      date: "6:00 PM",
      "customers": 22
    },
    {
      date: "7:00 PM",
      "customers": 23
    },
    {
      date: "8:00 PM",
      "customers": 25
    },
    {
      date: "9:00 PM",
      "customers": 25
    },
    {
      date: "10:00 PM",
      "customers": 25
    },
    {
      date: "11:00 PM",
      "customers": 25
    },
    {
      date: "11:59 PM",
      "customers": 25
    },
  ];
}

function getPlaceholderForGraph(dataName: string) {
  return [
    {
      date: "12:00 AM",
      [dataName]: 0
    },
    {
      date: "1:00 AM",
      [dataName]: 0
    },
    {
      date: "2:00 AM",
      [dataName]: 0
    },
    {
      date: "3:00 AM",
      [dataName]: 0
    },
    {
      date: "4:00 AM",
      [dataName]: 0
    },
    {
      date: "5:00 AM",
      [dataName]: 0
    },
    {
      date: "6:00 AM",
      [dataName]: 0
    },
    {
      date: "7:00 AM",
      [dataName]: 0
    },
    {
      date: "8:00 AM",
      [dataName]: 0
    },
    {
      date: "9:00 AM",
      [dataName]: 0
    },
    {
      date: "10:00 AM",
      [dataName]: 0
    },
    {
      date: "11:00 AM",
      [dataName]: 0
    },
    {
      date: "12:00 PM",
      [dataName]: 0
    },
    {
      date: "1:00 PM",
      [dataName]: 0
    },
    {
      date: "2:00 PM",
      [dataName]: 0
    },
    {
      date: "3:00 PM",
      [dataName]: 0
    },
    {
      date: "4:00 PM",
      [dataName]: 0
    },
    {
      date: "5:00 PM",
      [dataName]: 0
    },
    {
      date: "6:00 PM",
      [dataName]: 0
    },
    {
      date: "7:00 PM",
      [dataName]: 0
    },
    {
      date: "8:00 PM",
      [dataName]: 0
    },
    {
      date: "9:00 PM",
      [dataName]: 0
    },
    {
      date: "10:00 PM",
      [dataName]: 0
    },
    {
      date: "11:00 PM",
      [dataName]: 0
    },
    {
      date: "11:59 PM",
      [dataName]: 0
    },
  ];
}

function getDatesForGraph(dataName: string, map: Map<string, number>) {
  var sum = 0;
  return [
    {
      date: "12:00 AM",
      [dataName]: 0
    },
    {
      date: "1:00 AM",
      [dataName]: (sum += map.get("00") ?? 0)
    },
    {
      date: "2:00 AM",
      [dataName]: (sum += map.get("01") ?? 0)
    },
    {
      date: "3:00 AM",
      [dataName]: (sum += map.get("02") ?? 0)
    },
    {
      date: "4:00 AM",
      [dataName]: (sum += map.get("03") ?? 0)
    },
    {
      date: "5:00 AM",
      [dataName]: (sum += map.get("04") ?? 0)
    },
    {
      date: "6:00 AM",
      [dataName]: (sum += map.get("05") ?? 0)
    },
    {
      date: "7:00 AM",
      [dataName]: (sum += map.get("06") ?? 0)
    },
    {
      date: "8:00 AM",
      [dataName]: (sum += map.get("07") ?? 0)
    },
    {
      date: "9:00 AM",
      [dataName]: (sum += map.get("08") ?? 0)
    },
    {
      date: "10:00 AM",
      [dataName]: (sum += map.get("09") ?? 0)
    },
    {
      date: "11:00 AM",
      [dataName]: (sum += map.get("10") ?? 0)
    },
    {
      date: "12:00 PM",
      [dataName]: (sum += map.get("11") ?? 0)
    },
    {
      date: "1:00 PM",
      [dataName]: (sum += map.get("12") ?? 0)
    },
    {
      date: "2:00 PM",
      [dataName]: (sum += map.get("13") ?? 0)
    },
    {
      date: "3:00 PM",
      [dataName]: (sum += map.get("14") ?? 0)
    },
    {
      date: "4:00 PM",
      dataName: (sum += map.get("15") ?? 0)
    },
    {
      date: "5:00 PM",
      [dataName]: (sum += map.get("16") ?? 0)
    },
    {
      date: "6:00 PM",
      [dataName]: (sum += map.get("17") ?? 0)
    },
    {
      date: "7:00 PM",
      [dataName]: (sum += map.get("18") ?? 0)
    },
    {
      date: "8:00 PM",
      [dataName]: (sum += map.get("19") ?? 0)
    },
    {
      date: "9:00 PM",
      [dataName]: (sum += map.get("20") ?? 0)
    },
    {
      date: "10:00 PM",
      [dataName]: (sum += map.get("21") ?? 0)
    },
    {
      date: "11:00 PM",
      [dataName]: (sum += map.get("22") ?? 0)
    },
    {
      date: "11:59 PM",
      [dataName]: (sum += map.get("23") ?? 0)
    },
  ];
}

export default { couponData, customersData, getDatesForGraph, getPlaceholderForGraph};