/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const policy = () => {
  return (
    <>
      <Header menuClassName='lg:hidden' buttonClassName='hidden' />
      <section className='mt-[100px] md:mt-[140px] pb-10'>
        <div className='container textbox flex flex-col gap-5 text-base'>
          <div>
            <h3 className='text-xl font-medium mb-5 text-linear-cl'>I. Điều khoản chung:</h3>
            <div className='flex flex-col gap-4'>
              <p>
                Thỏa thuận người dùng (gọi tắt là Bản thỏa thuận) này, quy định các điều khoản và điều kiện sử dụng dịch
                vụ Bitback, được hiểu là "Bản Hợp đồng" giữa bạn và Công ty Cổ phần Công Nghệ Bitback, tên viết tắt là
                "Bitback" (Pháp nhân chủ quản cổng thanh toán trực tuyến trung gian tại website{' '}
                <a className='text-blue-400' href='https://bitback.community/' target='_blank' rel='noreferrer'>
                  bitback.community
                </a>
                , sau đây có thể gọi tắt là "Bitback"), áp dụng khi bạn sử dụng dịch vụ của Bitback. Trước khi sử dụng
                dịch vụ, bạn đồng ý rằng bạn đảm bảo đã đọc, hiểu rõ và đồng ý với nội dung Bản thỏa thuận này.
              </p>
              <p>
                Nếu không đồng ý nội dung Bản thỏa thuận này, bạn vui lòng không nên sử dụng dịch vụ. Khi bạn đã sử dụng
                dịch vụ Bitback (bạn đã đăng ký tài khoản hoặc không đăng ký tài khoản) thì bạn đã hoàn toàn đồng ý với
                tất cả các nội dung tại Bản thỏa thuận này.
              </p>
              <p>
                Nội dung Bản thỏa thuận này, Bitback có thể sửa đổi, bổ sung bất kỳ thời điểm nào, và những sửa đổi, bổ
                sung sẽ được đăng tải và cập nhật trên website{' '}
                <a className='text-blue-400' href='https://bitback.community/' target='_blank' rel='noreferrer'>
                  bitback.community
                </a>{' '}
                và có hiệu lực kể từ thời điểm đăng tải mà không cần phải thông báo trước. Nếu bạn tiếp tục sử dụng dịch
                vụ sau khi các sửa đổi, bổ sung nội dung Bản thỏa thuận được đăng tải đồng nghĩa với việc bạn đã chấp
                nhận các nội dung sửa đổi, bổ sung đó.
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium mb-5 text-linear-cl'>II. Giải thích một số từ ngữ:</h3>
            <ul className='list-disc pl-10'>
              <li>Bitback nghĩa là Công ty Cổ phần Công Nghệ Bitback.</li>
              <li>
                Dịch vụ Bitback là sản phẩm, dịch vụ, hay bất kỳ tính năng và/ hoặc chức năng được cung cấp bởi Bitback
                thông qua website:{' '}
                <a className='text-blue-400' href='https://bitback.community/' target='_blank' rel='noreferrer'>
                  bitback.community
                </a>
                , ứng dụng Bitback hay bất kỳ hình thức thể hiện nào khác.
              </li>
              <li>
                Khách hàng là bất kỳ cá nhân hay tổ chức có sử dụng dịch vụ Bitback. Bạn là chủ thể sử dụng Bitback và
                chấp nhận các quy định tại thỏa thuận Người dùng này và các văn bản sửa đổi, bổ sung, thay thế có liên
                quan.
              </li>
              <li>
                Quyền sở hữu trí tuệ có nghĩa là toàn bộ quyền hiện tại và tương lai liên quan đến bản quyền, sáng chế,
                nhãn hiệu, kiểu dáng công nghiệp (dù được đăng ký hay không) hoặc quyền về cơ sở dữ liệu, sáng chế hoặc
                bí mật kinh doanh, bí quyết quyền về thiết kế, các bản vẽ, tên hiệu thương mại và kinh doanh, tên miền,
                toàn bộ quyền sở hữu trí tuệ khác và những ứng dụng này có thể được tạo ra) có thể được bảo vệ tại bất
                kỳ quốc gia liên quan nào trên thế giới.
              </li>
              <li>
                OTP là mã khóa bí mật dùng một lần (One Time Password), được gửi qua tin nhắn vào số điện thoại đăng ký
                sử dụng Bitback.
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-medium mb-5 text-linear-cl'>III. Vai trò của người dùng:</h3>
            <div className='flex flex-col gap-4'>
              <p>
                Bạn cam kết khi sử dụng Bitback tức là bạn đã đầy đủ năng lực và hành vi để thực hiện giao dịch đó và
                chịu trách nhiệm toàn bộ về những hành vi mà bạn thực hiện. Bạn cam kết đã hiểu rõ và đồng ý cung cấp
                đầy đủ, trung thực và chính xác các thông tin theo yêu cầu Bitback. Nếu bạn cung cấp không đúng bất kỳ
                thông tin nào, hoặc nếu Bitback có căn cứ hợp lý để nghi ngờ bạn cung cấp thông tin sai, Bitback có
                quyền từ chối cung cấp bất kỳ hay toàn bộ chức năng, dịch vụ của Bitback tại thời điểm hiện tại hoặc sau
                này và bạn phải chịu mọi trách nhiệm phát sinh từ các hành vi trên.
              </p>
              <p>
                Bạn cần thông báo ngay cho bộ phận hỗ trợ khách hàng của Bitback về mọi trường hợp bất thường liên quan
                đến thông tin tài khoản, giao dịch mà bạn thực hiện, hoặc bất kỳ trường hợp nào khác vi phạm bảo mật.
                Bitback sẽ không chịu trách nhiệm đối với bất kỳ tổn thất hoặc thiệt hại nào phát sinh do bạn không tuân
                thủ quy định tại điều khoản này.
              </p>
              <p>
                Bạn cần lưu giữ tất cả các hóa đơn trực tuyến và chứng từ liên quan để làm căn cứ đối chiếu khi có khiếu
                nại phát sinh đối với những giao dịch đã thanh toán. Trong trường hợp, vì một lý do nào đó bạn không lưu
                giữ được chứng từ, Bitback sẽ hỗ trợ bạn trong khả năng có thể việc cung cấp các chứng từ gốc đó. Trường
                hợp bạn đã thực hiện giao dịch, nhưng không nhận được hoá đơn trực tuyến, hoặc gặp sự cố trong quá trình
                giao dịch nêu tại điều này, bạn phải báo ngay cho bộ phận hỗ trợ khách hàng của chúng tôi.
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium mb-5 text-linear-cl'>IV. Quan hệ của Bitback với các Bên:</h3>
            <div className='flex flex-col gap-4'>
              <ul className='flex flex-col gap-4'>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'>Vai trò của Bitback:</p>
                  <div>
                    <ul className='list-disc pl-10'>
                      <li>
                        Khi một khách hàng chuyển tiền cho Bitback giữ hộ hoặc thanh toán thì: vào thời điểm Bitback đã
                        nhận được tiền, Bitback sẽ cộng thêm vào tài khoản của khách hàng mở tại Bitback một số tiền VNĐ
                        bằng với số tiền mà Bitback nhận được theo tỷ lệ 1:1 (trừ đi các khoản phí mà khách hàng phải
                        trả nếu có).
                      </li>
                      <li>
                        Bitback có trách nhiệm hướng dẫn, cung cấp cho bạn các thông tin, tài liệu cần thiết về việc sử
                        dụng Bitback. Bitback có trách nhiệm bảo mật tuyệt đối thông tin cá nhân và thông tin tài khoản
                        của bạn.
                      </li>
                      <li>Bitback có thể khóa, tạm ngừng hoặc giới hạn truy nhập của bạn vào dịch vụ.</li>
                      <li>
                        Bitback có thể liên hệ với người bán hàng mà bạn giao dịch, liên hệ với ngân hàng của bạn, với
                        người sử dụng khác hoặc liên hệ tới bên thứ ba để cảnh báo hoặc lưu ý tới hành động của bạn.
                      </li>
                      <li>
                        Phối hợp và cung cấp thông tin cho cơ quan chức năng khi xảy ra khiếu nại, tố cáo liên quan đến
                        các hành vi lừa đảo về tài chính hoặc vi phạm pháp luật.
                      </li>
                      <li>Và các vai trò, trách nhiệm khác theo quy định pháp luật.</li>
                    </ul>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'>Thông tin cá nhân của bạn:</p>
                  <div>
                    <p>
                      Bitback luôn coi trọng vấn đề Bảo vệ thông tin cá nhân của bạn. Hãy xem Chính sách quyền riêng tư
                      của chúng tôi để hiểu hơn về những cam kết của Bitback nhằm bảo vệ thông tin cho bạn cũng như việc
                      sử dụng và chia sẻ thông tin khi cần.
                    </p>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'>Thông tin của những đối tượng khác:</p>
                  <div>
                    <p>
                      Nếu bạn nhận được thông tin về khách hàng khác của chúng tôi khi sử dụng Bitback, bạn phải giữ kín
                      thông tin, không được tiết lộ hoặc phát tán thông tin này đến người khác hoặc dùng nó vào mục đích
                      tiếp thị trừ khi có sự đồng ý của chính người đó.
                    </p>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'>Quyền sở hữu trí tuệ và An toàn bảo mật:</p>
                  <p className='mb-5'>Bạn cam kết:</p>
                  <div>
                    <ul className='list-disc pl-10'>
                      <li>Tôn trọng quyền sở hữu trí tuệ của Bitback và các sản phẩm, dịch vụ khác của Bitback.</li>
                      <li>
                        Không tự ý thay đổi tên gọi, hình ảnh, nút bấm và các thành phần liên quan đến thương hiệu của
                        các sản phẩm của Bitback tại bất kỳ đâu.
                      </li>
                      <li>
                        Hợp tác và cung cấp thông tin theo yêu cầu của Bitback trong quá trình điều tra các trường hợp
                        nghi ngờ phạm pháp, lừa đảo hoặc vi phạm các quy định của Bitback.
                      </li>
                      <li>
                        Thực hiện đúng các hướng dẫn an toàn của Bitback, tự bảo mật tài khoản và chịu trách nhiệm nếu
                        để xảy ra mất mát do rò rỉ thông tin từ phía mình.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'>Chuyển nhượng:</p>
                  <div>
                    <p>
                      Khi chưa có sự đồng ý bằng văn bản của Bitback, bạn không được chuyển nhượng bất cứ quyền và nghĩa
                      vụ nào mà bạn đã thống nhất trong Bản thỏa thuận này. Bitback bảo lưu quyền chuyển nhượng hoặc bất
                      cứ quyền hay nghĩa vụ nào được ghi trong Bản thỏa thuận này tại bất kỳ thời điểm nào.
                    </p>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'>Thông báo tới bạn:</p>
                  <div className='flex flex-col gap-4'>
                    <p>
                      Bạn đồng ý rằng Bitback có thể gửi thông báo tới bạn bằng cách thông báo trên website Bitback hoặc
                      gửi thư điện tử tới địa chỉ Email mà bạn đã cung cấp. Bạn sẽ nhận được thông báo/thư điện tử của
                      chúng tôi trong vòng hai mươi bốn giờ tính từ khi chúng tôi đưa thông tin lên website.
                    </p>
                    <p>
                      Nếu những thông báo này được gửi qua Email, chúng tôi mặc định bạn sẽ nhận được thông tin sau hai
                      (02) ngày làm việc tính từ thời điểm thư được gửi đi.
                    </p>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'> Liên hệ tới bạn:</p>
                  <div className='flex flex-col gap-4'>
                    <p>
                      Bằng việc cung cấp số điện thoại (di động và/hoặc cố định) khi sử dụng Bitback, bạn đã đồng ý cho
                      phép Bitback được gửi tin nhắn SMS/MMS hoặc gọi điện thoại tới số điện thoại của bạn để giới
                      thiệu, tư vấn, hỗ trợ hoặc thông báo hoặc quảng bá Bitback.
                    </p>
                  </div>
                </li>
                <li className='list-decimal ml-3 '>
                  <p className='font-bold mb-5'> Thông tin liên hệ của Bitback:</p>
                  <div className='flex flex-col gap-4'>
                    <p>
                      Ngoài các phương thức liên hệ trực tiếp với bộ phận hỗ trợ được Bitback đưa lên website
                      <a className='text-blue-400' href='https://bitback.community/' target='_blank' rel='noreferrer'>
                        {' '}
                        bitback.community
                      </a>
                      , bạn có thể liên hệ hoặc gửi tài liệu tới địa chỉ của Bitback theo thông tin như sau:
                    </p>
                    <p>Công ty Bitback PTE. LTD. Singapore (gọi tắt là "Bitback")</p>
                    <ul className='list-disc pl-10'>
                      <li>Singapore: 68 Upper Serangoon View, #11-24, 533884</li>
                      <li>Việt Nam: 200 đường 3/2, phường 12, quận 10, TP. Hồ Chí Minh</li>
                      <li>Email: admin@bitback.community</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default policy
