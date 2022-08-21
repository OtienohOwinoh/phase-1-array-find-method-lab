function superbowlWin(record) {
    const result = record.find(function (record) {
      return record.result === "W";
    });
    if (result) {
      return result.year;
    } else {
      return undefined;
    }
  }
  console.log(superbowlWin(record));