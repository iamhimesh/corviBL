/**
 * @name Constants
 * @author Sachin Semlety
 * @description
 * This Class is used to access the Constants Variables declared for the App.
**/
export interface MENU {
    title: string, component: any, active: boolean, icon: string
}
export class Constants {
    // public static get CORVI_Base_URL(): string { return " http://113.193.225.56:8080/CorviMobileAPI/api/"; };
    // public static get CORVI_Base_URL(): string { return "http://10.22.2.31:8080/CorviMobileAPI/api/"; };

    // public static get CORVI_Base_URL(): string { return "http://104.211.244.239/MobileApi/MobileApi/"; }

    public static get CORVI_Base_URL(): string { return "https://lmsinv.balmerlawrie.co.in/Mobapi/MobileAPI/"; }

    public static get CORVI_PDF_URL(): string { return "http://52.76.76.33/demo/"; }
    public static get SECRET_KEY(): string { return "0123456789abcdef" };
    public static get MENU_PAGES_ARRAY(): Array<MENU> {
        return [
            { title: 'Home', component: 'DashboardPage', active: true, icon: 'home' },
            { title: 'New Sales Activity', component: 'NewSalesActivityPage', active: false, icon: 'quote' },
            { title: 'Search Sales Activity', component: 'OpenJobsPage', active: false, icon: 'open' },
            { title: 'New Sales Lead', component: 'ClosedJobsPage', active: false, icon: 'close' },
            { title: 'Update Job Milestone', component: 'InvoicesPage', active: false, icon: 'print' },
            { title: 'Configure Parameters', component: 'EnquiryPage', active: false, icon: 'clipboard' },
            { title: 'Settings', component: 'EnquiryPage', active: false, icon: 'clipboard' },
            { title: 'Notification', component: 'EnquiryPage', active: false, icon: 'clipboard' }
        ];
    }
    public static get MIME_TYPE(): string { return "application/pdf" }

    public static MENU = {
        DEFAULT: 'menu-components',
        MATERIAL: 'menu-material',
        AVATAR: 'menu-avatar',
    };

    public static SMTP_Credentails = {
        "Host": "smtp25.elasticemail.com",
        "Username": "kalelogisticsandy@gmail.com",
        "Password": "60f0fd9e-84b6-4baa-9983-db9a021e69f7",
        "From": "kalelogisticsandy@gmail.com"
    }


    // All Services names includes in this below object
    public static Corvi_Services = {
        "Login": "Login",
        "UserDetails": "LoginDetails",
        "ForgetPassword": "ForgotPassword",
        "GetVendorMasterList": "GetVendorMasterList",
        "GetSearchMilestoneList": "GetSearchMilestoneList",
        "SalesActivitySave": "SalesActivitySave",
        "OpenJobs": {
            "Get_OpenJobList": "OpenJobList"
        },
        "ClosedJobs": {
            "Get_CloseJobList": "CloseJobList"
        },
        "JobDetails": {
            "JobData": "JobData?",
            "WoDetailNo": "WoDetailNo="
        },
        "Quotation": {
            "Get_QuatationList": "QuatationList",
            "Get_Quatation_Details": "QuatationData?",
            "QuatationId": "QuatationId="
        },
        "Invoices": {
            "Get_InvoiceList": "InvoiceList"
        },
        "InvoicesDetails": {
            "Get_Invoice_Details": "InvoiceData?",
            "DetailNo": "DetailNo="
        },
        "ConsolidateInvoiceDetails": {
            "UserId": "ConsolidateInvoiceData?UserId=",
            "DetailNo": "&DetailNo="
        },
        "FollowUp": "FollowUp"
    }


    // One Signal and FireBase Credentials
    static get APP_ID(): string { return "dc24e440-2ee0-4a29-9f29-b20524993970" };
    static get GOOOGLE_PROJECT_NUMBER(): string { return "259880603802" };
    static get REST_API_KEY(): string { return "NDdjMTk2ODAtODYyNC00OWJjLTgyNTAtM2RjNWY4NDZiOWMx" };
    static get ONE_SIGNAL_NOTIFACTION_URL(): string { return "https://onesignal.com/api/v1/notifications?app_id=" + this.APP_ID };
    static get ONE_SIGNAL_BASE_URL(): string { return "https://onesignal.com/api/v1/notifications" };


    // Chart Constants

    // Pie chart
    public static PIE_CHART_DATA = {
        labels: ['Quotation', 'Open Jobs', 'Closed Jobs', 'Invoices'],
        datasets: [
            {
                data: [0, 0, 0, 0],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
    }

    // Bar chart

    public static BAR_CHART_DATA = {
        labels: ['Quotation', 'Open Jobs', 'Closed Jobs', 'Invoices'],
        datasets: [{
            label: '# of Entities',
            data: [0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    }

    public static SlidesJSONArray = [{
        title: 'Open Quotation\'s',
        imageUrl: 'assets/img/lists/wishlist-1.jpg',
        count: 0,
        page: 'QuotationPage',
        bgColor: '#ff6384'
    },
    {
        title: 'Open Job\'s',
        imageUrl: 'assets/img/lists/wishlist-2.jpg',
        count: 0,
        page: 'OpenJobsPage',
        bgColor: '#36a2eb'
    },
    {
        title: 'Closed Job\'s',
        imageUrl: 'assets/img/lists/wishlist-3.jpg',
        count: 0,
        page: 'ClosedJobsPage',
        bgColor: '#ffce56'
    },
    {
        title: 'Invoice\'s',
        imageUrl: 'assets/img/lists/wishlist-4.jpg',
        count: 0,
        page: 'InvoicesPage',
        bgColor: '#e5e5e5'
    }]

    static get BAR_CHART_OPTIONS(): Object {
        return {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
}
