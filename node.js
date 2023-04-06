if (decodeURIAchvPath.indexOf('工程造价') === -1) {
    // 判断文件夹是否已存在
    fs.exists(`${decodeURIAchvPath}/工程造价`, function (exists: any) {
      // setTimeout(() => {
      //   dialog
      //     .showMessageBox(mainWindow, {
      //       type: 'warning',
      //       title: '' + exists,
      //       message: (decodeURIAchvPath.indexOf('工程造价') === -1) + '',
      //       detail: decodeURIAchvPath,
      //       buttons: [decodeURIAchvPath.substring(60)],
      //     })
      //     .then((res) => {
      //       res.response;
      //     });
      // }, 2000);
      // if (!exists) {
      //   // 创建文件夹
      //   fs.mkdir(`${decodeURIAchvPath}/工程造价`, function (err: any) {
      //     if (err) {
      //       console.log('mkdir error');
      //       return;
      //     }
      //     // 写入excel文件
      //     fs.writeFile(
      //       `${decodeURIAchvPath}/工程造价/${id}.xlsx`,
      //       Buffer.from(bufferArray),
      //       function (err: any) {
      //         if (err) {
      //           throw err;
      //         }
      //         AppStore.dispatch({ type: 'app/exportReportFormsSuc' });
      //       }
      //     );
      //   });
      // } else {
      //   fs.writeFile(
      //     `${decodeURIAchvPath}/${id}.xlsx`,
      //     Buffer.from(bufferArray),
      //     function (err: any) {
      //       if (err) {
      //         throw err;
      //       }
      //       AppStore.dispatch({ type: 'app/exportReportFormsSuc' });
      //     }
      //   );
      // }
      fs.mkdir(`${decodeURIAchvPath}`, function (err: any) {
        if (err) {
          console.log('mkdir error');
          return;
        }
        // 写入excel文件
        fs.writeFile(
          `${decodeURIAchvPath}/工程造价/${id}.xlsx`,
          Buffer.from(bufferArray),
          function (err: any) {
            if (err) {
              throw err;
            }
            AppStore.dispatch({ type: 'app/exportReportFormsSuc' });
          }
        );
      });
    });
  } else {
    fs.writeFile(
      `${decodeURIAchvPath}/${id}.xlsx`,
      Buffer.from(bufferArray),
      function (err: any) {
        if (err) {
          throw err;
        }
        AppStore.dispatch({ type: 'app/exportReportFormsSuc' });
      }
    );
  }