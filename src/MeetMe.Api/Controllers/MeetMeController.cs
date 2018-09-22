using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MeetMe.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MeetMeController : ControllerBase
    {
        public static List<User> Users = new List<User>
        {
            new User { Name = "ohae", MyGroup = "002" },
        };
        public static List<Meeting> Meetings = new List<Meeting>
        {
            new Meeting { _id = "201", GroupId = "002", Topic = "จันทร์หน้าไปป่าว สาสส", Details = "จันทร์หน้าไปป่าว สาสส" },
            new Meeting { _id = "202", GroupId = "002", Topic = "จิบเบาาา เย็นนี้ เริ่ม 16.00....", Details = "จิบเบาาา เย็นนี้ เริ่ม 16.00 พี โจ๊ะ เอ้ เอก standy." },
            new Meeting { _id = "203", GroupId = "002", Topic = "เสาร์แห่งชาติซอดแจ้งเด้อพี่น้อง....", Details = "เสาร์แห่งชาติซอดแจ้งเด้อพี่น้อง.... ใครไม่ไปหักเงินเข้ากองทุน TheS เฮฮา คนละ 200 บาทไทย ใครไปแล้วอยู่ถึงสองโมงเช้าได้รางวัล ซอดแจ้งฮีโร่ มูลค่า 500 บาท" },
        };
        public static List<MyGroup> MyGroups = new List<MyGroup>
        {
            new MyGroup { _id = "001", Name = "TheS เตะบอล" },
            new MyGroup { _id = "002", Name = "TheS เฮฮา" },
            new MyGroup { _id = "00-", Name = "TheS lunch" },
        };

        // POST api/values
        [HttpPost]
        public User Login([FromBody] User user)
        {
            if (!Users.Any(x=>x.Name == user.Name))
            {
                User n = new User{ _id = Guid.NewGuid().ToString(), Name = user.Name };
                Users.Add(n);
                return n;
            }else 
            {
                return Users.Where(x=>x.Name == user.Name).FirstOrDefault();
            }
        }
        // GET api/values
        [HttpGet("{groupid}")]
        public List<Meeting> GetMeetings(string groupid)
        {
            return Meetings.Where(x=>x.GroupId == groupid).ToList();
        }

        // GET api/values/5
        [HttpPost]
        public void NewMeeting([FromBody] Meeting meeting)
        {
            meeting._id = Guid.NewGuid().ToString();
            Meetings.Add(meeting);
        }

        // GET api/values
        [HttpGet("{meetingid}")]
        public Meeting MeetingDetail(string meetingid)
        {
            return Meetings.Where(x=>x._id == meetingid).FirstOrDefault();
        }

        // GET api/values
        [HttpGet]
        public List<MyGroup> GetGroups()
        {
            return MyGroups;
        }


        // GET api/values/5
        [HttpPost]
        public void JoinGroup([FromBody] User user)
        {
            var u = Users.Where(x=>x.Name == user.Name).FirstOrDefault();
            u.MyGroup = user.MyGroup;
        }
    }

    public class User
    {
        public string _id { get; set; }
        public string Name { get; set; }
        public string MyGroup { get; set; }
    }

    public class Meeting
    {
        public string _id { get; set; }
        public string GroupId { get; set; }
        public string Topic { get; set; }
        public string Details { get; set; }
    }

    public class MyGroup
    {
        public string _id { get; set; }
        public string Name { get; set; }
    }
}
