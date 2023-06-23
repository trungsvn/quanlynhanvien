/**
 *
 * @param  value Giá trị chuỗi cần kiểm tra
 * @param  minLength Chiều dài tối thiểu của chuỗi cần kiểm tra
 * @param  maxLength Chiều dài tối đa của chuỗi (nếu maxLength = undefined và minLength = 1 => kiểm tra rỗng)
 * @param selector selector của thẻ cần hiển thị lỗi
 * @param messErr Lỗi cần hiển thị lên UI nếu `value` không thỏa mãn điều kiện
 */

function kiemTraChuoi(value, minLength, maxLength, selector, messErr) {
    // Nếu như kiểm tra false
    if (value.trim().length < minLength || value.trim().length > Number(maxLength)) {
        getElement(selector).innerHTML = messErr
        getElement(selector).style.display = "block"

        return false
    }

    // Nếu như kiểm tra true
    getElement(selector).innerHTML = ''
    return true
}

/**
 *
 * @param value chuỗi cần kiểm tra
 * @param selector Thẻ hiển thị lỗi
 * @param pattern chuỗi pattern để kiểm tra chuỗi
 * @param messErr Mess err cần hiển thị
 */

function kiemTraPattern(value, selector, pattern, messErr) {
    // Nếu chuỗi ko thỏa mãn pattern
    // debugger
    if (!pattern.test(value)) {
        getElement(selector).innerHTML = messErr
        getElement(selector).style.display = "block"
        return false
    }

    // Nếu chuỗi đúng
    getElement(selector).innerHTML = ''
    return true
}

/**
 *
 * @param {*} maSV
 * @param {*} dssv
 * @param {*} selector
 * @param {*} messErr
 * @param {*} isEdit: true => đang edit ko cần kiểm tra trùng, false => đang thêm mới cần kiểm tra
 */

function kiemTraMaNV(tknv, DSNV, isEdit, selector, messErr) {
    if(isEdit) return true
    
    var isFlag = true
    for (var i = 0; i < DSNV.length; i++) {
        if (DSNV[i].tknv === tknv) {
            isFlag = false
            break
        }
    }

    if (isFlag) {
        getElement(selector).innerHTML = ''
        return true
    }

    if (!isFlag) {
        getElement(selector).innerHTML = messErr
        getElement(selector).style.display = "block"
        return false
    }
}
