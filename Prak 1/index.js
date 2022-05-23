$(document).ready(function () {
    var jumlahProduk = [
      {
        namaproduk: "Jet Tempur",
        jumlah: 10,
      },
      {
        namaproduk: "Nuklir Hiroshima",
        jumlah: 1,
      },
      {
        namaproduk: "Infinity Stone",
        jumlah: 6,
      },
      {
        namaproduk: "Burj Khalifa",
        jumlah: 5,
      },
      {
        namaproduk: "Rudal Hipersonik",
        jumlah: 3,
      },
    ];
    
    var produk = [
      "Jet Tempur",
      "Nuklir Hiroshima",
      "Infinity Stone",
      "Burj Khalifa",
      "Rudal Hipersonik",
    ];
  
    var n = 1;
    $("#tambah-barang").hide();
    $("#barang-" + n).change(function () {
        $("#tambah-barang").show();
    });
  
    let tampil = "";
    $("#pesan").click(function () {
      for (let i = 1; i <= n; i++) {
        let jumlah_idx = jumlahProduk.findIndex(
          (data) => data.namaproduk === $("#barang-" + i).val()
        );
        if ($("#jumlah-" + i).val() <= jumlahProduk[jumlah_idx].jumlah) {
          
          jumlahProduk[jumlah_idx].jumlah -= $("#jumlah-" + i).val();
          
          tampil += "<ul>"
          tampil +=
            "<li>" +
            $("#barang-" + i).val() +
            " (" +
            $("#jumlah-" + i).val() +
            ")</li>";
          tampil += "</ul>"
          $("#list-produk").html(`${tampil}`);
        } else {
          alert(
            `Produk ${jumlahProduk[jumlah_idx].namaproduk}. Jumlah Stok ${jumlahProduk[jumlah_idx].jumlah}`
          );
        }
      }
      let nama = $("#nama").html(`${$("#pemesan").val()}`);
      $("#nama").show() = nama;
    });
  
    $("#tambah-barang").click(function () {
      console.log(n)
      let jumlah_idx = jumlahProduk.findIndex(
        (data) => data.namaproduk === $("#barang-" + n).val()
      );
      n += 1;
      let pesanan = `<div class="form-prdk"><div class="left" id="id-${n}"><label for="produk-${n}">Produk</label><br><select id="barang-${n}" required><option value="" hidden selected>Pilih produk</option>`;
      produk.map((data) => {
        pesanan += `<option value="${data}">${data}</option>`;
      });
      
      pesanan += `</select><br></div><div class="left cont-3"><label for="jumlah-${n}" style="padding-left: 5px;">Jumlah</label><br><input type="number" id="jumlah-${n}" class="jumlah" required><br></div>`;
      
      pesanan += `<div id='button-delete' class="left pd-top"><button id="hapus-${n}" class="hapus"><div>X</div></button></div><br>`;
      $(this).before(pesanan);
  
      $("#hapus-" + n).click(function () {
        $("#id-" + n).nextAll();
        $(this).parent().parent().remove();
        $("#id-" + n).closest("div");
        $(this).parent().parent().remove();
      });

      if(n>=5){
        $("#tambah-barang").hide();
      }
    });
  });