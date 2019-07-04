MeteredMSG = '<h3><font color="red">刷電子票證(悠遊卡、一卡通、iCash 2.0)8公里免費</font></h3>';
CitybusMSG = '<span style="color: red;font-size:20px;font-weight:bold;">台南市民搭乘市區公車(0~99路，33及61路除外)，刷市民卡享半價優惠(9元)！</span><br /><span style="color: red;font-size:18px;font-weight:bold;">（本項優惠至108/12/31止）</span><p></p>';
PromotionMSG = '<h2>使用電子票證時，上下車皆須刷卡</h2><br /><span style="color:#7F3310;font-size:20px;font-weight:bold;">搭乘台鐵及大台南公車，並且上、下車都刷卡，<br />4小時內轉乘市區公車1段票免費、轉乘幹支線公車8公里免費再折扣9元(需使用電子票證，公車轉台鐵無優惠)</span><p></p><h3>65歲以上長者刷台南市民卡敬老卡及身障人士刷台南市民卡愛心卡，可享大台南公車全線免費搭乘</h3>';
TimeScheduleMSG = '<p><h2>除了起站為發車時間，其餘站點皆為預估時間，敬請提早候車。</h2></p>';
W_message = '<font color="#0000FF">W</font>表示僅平日行駛';
L_message = '<font color="#FF0000">L</font>表示低地板公車';
H_message = '<font color="red">H</font>表示僅假日行駛';
S_message = '<font color="green">S</font>表示僅上課日行駛，例假日、寒暑假停駛';
copyrightMSG = '<p>Copyright (c) 2014-'+(new Date()).getFullYear()+' Tainan Bus for FUN all rights reserved. | <a href="../intro.html" rel="nofollow">about us</a></p>';

function Announcement(str){
	document.write('<table cellSpacing=0 borderColorDark=#ffffff width=600 borderColorLight=purple border=1>\
		<tr>\
			<td bgColor=#61A058 style="padding: 30px 10px;">\
				<font color=#FFFFFF size=3>' + str + '</font>\
			</td>\
		</tr>\
	</table>');
}